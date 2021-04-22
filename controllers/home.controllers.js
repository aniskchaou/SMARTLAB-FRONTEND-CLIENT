exports.getContact = async function (req, res, next) {
  res.render("elements/contact", { viewTitle: 'Contact' });
}

exports.getBlog = async function (req, res, next) {
  res.render("elements/blog", { viewTitle: 'Blog' });
}

exports.getAbout = async function (req, res, next) {
  res.render("elements/about", { viewTitle: 'About' });
}

exports.getLocation = async function (req, res, next) {
  res.render("elements/location", { viewTitle: 'Location' });
}

exports.getService = async function (req, res, next) {
  res.render("elements/service", { viewTitle: 'Service' });
}

exports.getHome = async function (req, res, next) {
  res.render("elements/index", { viewTitle: 'SmartLab' });
}




