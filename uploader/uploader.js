var bucketName = "storage-andrisborbas";
var bucketRegion = "eu-central-1";
var IdentityPoolId = "eu-central-1:45201c7a-1fdc-43da-bc04-419a118c3f22";

AWS.config.update({
  region: bucketRegion,
  credentials: new AWS.CognitoIdentityCredentials({
    IdentityPoolId: IdentityPoolId
  })
});

var s3 = new AWS.S3({
  apiVersion: "2006-03-01",
  params: { Bucket: bucketName }
});

function listFolders() {
  s3.listObjects({ Delimiter: "/" }, function(err, data) {
    if (err) {
      return alert("There was an error listing your folders: " + err.message);
    } else {
      var folders = data.CommonPrefixes.map(function(commonPrefix) {
        var prefix = commonPrefix.Prefix;
        var folderName = decodeURIComponent(prefix.replace("/", ""));
        return getHtml([
          "<li>",
          "<span onclick=\"deleteFolder('" + folderName + "')\">X</span>",
          "<span onclick=\"viewFolder('" + folderName + "')\">",
          folderName,
          "</span>",
          "</li>"
        ]);
      });
      var message = folders.length ?
        getHtml([
          "<p>Click on an folder name to view it.</p>",
          "<p>Click on the X to delete the folder.</p>"
        ]) :
        "<p>You do not have any folders. Please Create folder.";
      var htmlTemplate = [
        "<h2>Folders</h2>",
        message,
        "<ul>",
        getHtml(folders),
        "</ul>",
        "<button onclick=\"createFolder(prompt('Enter Folder Name:'))\">",
        "Create New Folder",
        "</button>"
      ];
      document.getElementById("app").innerHTML = getHtml(htmlTemplate);
    }
  });
}

function createFolder(folderName) {
  folderName = folderName.trim();
  if (!folderName) {
    return alert("Folder names must contain at least one non-space character.");
  }
  if (folderName.indexOf("/") !== -1) {
    return alert("Folder names cannot contain slashes.");
  }
  var folderKey = encodeURIComponent(folderName) + "/";
  s3.headObject({ Key: folderKey }, function(err, data) {
    if (!err) {
      return alert("Folder already exists.");
    }
    if (err.code !== "NotFound") {
      return alert("There was an error creating your folder: " + err.message);
    }
    s3.putObject({ Key: folderKey }, function(err, data) {
      if (err) {
        return alert("There was an error creating your folder: " + err.message);
      }
      alert("Successfully created folder.");
      viewFolder(folderName);
    });
  });
}

function viewFolder(folderName) {
  var folderFilesKey = encodeURIComponent(folderName) + "/";
  s3.listObjects({ Prefix: folderFilesKey }, function(err, data) {
    if (err) {
      return alert("There was an error viewing your folder: " + err.message);
    }
    // 'this' references the AWS.Response instance that represents the response
    var href = this.request.httpRequest.endpoint.href;
    var bucketUrl = href + bucketName + "/";

    var files = data.Contents.map(function(file) {
      var fileKey = file.Key;
      if (fileKey[fileKey.length - 1] == '/') {
        console.log("asd");
        return;
      }
      var fileUrl = bucketUrl + encodeURIComponent(fileKey);
      return getHtml([
        "<span>",
        "<div>",
        '<a href="' + fileUrl + '" download>',
        '<img style="width:128px;height:128px;" src="' + fileUrl + '"/>',
        "</a>",
        "</div>",
        "<div>",
        "<span onclick=\"deleteFile('" +
        folderName +
        "','" +
        fileKey +
        "')\">",
        "X",
        "</span>",
        "<span>",
        fileKey.replace(folderFilesKey, ""),
        "</span>",
        "</div>",
        "</span>"
      ]);
    });
    var message = files.length ? (["<p>Download by clicking on the picture</p>", "<p>Click on the X to delete the file</p>"]) :
      "<p>You do not have any files in this folder. Please add files.</p>";
    var htmlTemplate = [
      "<h2>",
      "Folder: " + folderName,
      "</h2>",
      message,
      "<div>",
      getHtml(files),
      "</div>",
      '<input type="file" id="file-chooser" />',
      '<button id="upload-button" onclick="addFile(\'' + folderName + "')\">",
      "Upload",
      "</button>",
      '<button onclick="listFolders()">',
      "Back To Folders",
      "</button>"
    ];
    document.getElementById("app").innerHTML = getHtml(htmlTemplate);
  });
}

function addFile(folderName) {
  var files = document.getElementById("file-chooser").files;
  if (!files.length) {
    return alert("Please choose a file to upload first.");
  }
  var file = files[0];
  var fileName = file.name;
  var folderFilesKey = encodeURIComponent(folderName) + "/";

  var fileKey = folderFilesKey + fileName;

  // Use S3 ManagedUpload class as it supports multipart uploads
  var upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: bucketName,
      Key: fileKey,
      Body: file,
      ACL: "public-read"
    }
  });

  var promise = upload.promise();

  promise.then(
    function(data) {
      alert("Successfully uploaded file.");
      viewFolder(folderName);
    },
    function(err) {
      return alert("There was an error uploading your file: ", err.message);
    }
  );
}

function deleteFile(folderName, fileKey) {
  s3.deleteObject({ Key: fileKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your file: ", err.message);
    }
    alert("Successfully deleted file.");
    viewFolder(folderName);
  });
}

function deleteFolder(folderName) {
  var folderKey = encodeURIComponent(folderName) + "/";
  s3.listObjects({ Prefix: folderKey }, function(err, data) {
    if (err) {
      return alert("There was an error deleting your folder: ", err.message);
    }
    var objects = data.Contents.map(function(object) {
      return { Key: object.Key };
    });
    s3.deleteObjects({
        Delete: { Objects: objects, Quiet: true }
      },
      function(err, data) {
        if (err) {
          return alert("There was an error deleting your folder: ", err.message);
        }
        alert("Successfully deleted folder.");
        listFolders();
      }
    );
  });
}