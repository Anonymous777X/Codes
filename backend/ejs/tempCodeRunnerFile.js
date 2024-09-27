data = data.filter(el => id !== el.id);
    console.log(data.length);
    res.redirect("/quora?_post=deleted");