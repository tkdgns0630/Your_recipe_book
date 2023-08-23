const router = require('express').Router();
const apiRoutes = require('./api');
const Project = require('../models/Project');

router.use('/api', apiRoutes);
// route to get all dishes
router.get('/', async (req, res) => {
  // We find all dishes in the db and set the data equal to dishData
  const projectData = await Project.findAll().catch((err) => {
    res.json(err);
  });
  const projects = projectData.map((project) => project.get({ plain: true }));
  res.render('all', { projects });
});

module.exports = router;
