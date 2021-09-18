const upload = (req, res, next) => {
  if (req.fileDuplicated)
    return next({ statusCode: 409, message: 'File already exists' });

  if (req.fileValidationError)
    return next({ statusCode: 403, message: 'Extension must be `png`' });
  return res.send();
};
module.exports = upload;
