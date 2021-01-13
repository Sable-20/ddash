const express = require('express');
const { commands } = require('../../handlers/command-handler');

const router = express.Router();

router.get('/', (req, res) => {
    res.render("index", {something: "Home"});
  });
  
router.get("/commands", (req, res) => res.render('commands', {
    subtitle: "Commands",
    categories: [{name: 'Moderation', icon: 'fas fa-gavel'},
                 {name: 'Economy', icon: 'fas fa-coins'},
                 {name: 'General', icon: 'fas fa-star'},
                 {name: 'Music', icon: 'fas fa-music'}],
    commands: Array.from(commands.values()),
    commandsString: JSON.stringify(Array.from(commands.values()))
}));

module.exports = router;