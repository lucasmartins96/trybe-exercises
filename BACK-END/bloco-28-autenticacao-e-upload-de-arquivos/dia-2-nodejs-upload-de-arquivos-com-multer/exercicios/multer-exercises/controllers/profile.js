const fs = require('fs');

const FILE_PATH = `${__dirname}/../profiles.json`;

const getProfileData = () => {
  const fileText = fs.readFileSync(FILE_PATH);
  return JSON.parse(fileText);
};

const saveProfileData = (profiles) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(profiles));
};

const profile = (req, res) => {
  const { name, email, password, bio } = req.body;

  const profileDate = {
    id: req.file.filename,
    name,
    email,
    password,
    bio,
  };

  const profiles = getProfileData();
  profiles.push(profileDate);
  saveProfileData(profiles);
  return res.send({ profileDate });
};

const getProfile = (req, res, next) => {
  const profileId = req.params.id;
  const profiles = getProfileData();

  const profileResult = profiles.find((profile) => profile.id === profileId);

  if (profileResult) return res.send(profileResult);

  return next({ statusCode: 404, message: 'Perfil não encontrado' });
};

module.exports = { profile, getProfile };
