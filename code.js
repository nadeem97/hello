+const express = require('express')
+const app = express()
+const bodyParser = require('body-parser')
+var db
+var mongoose = require('mongoose');
+mongoose.connect('mongodb://localhost/test');//test is db name
+
+
+app.listen(3003, function() {
+  console.log('listening on 3000')
+})
+
+
+var user = mongoose.model('user',{name:String , password:String });
+var newuser = new user({name:'sravani003' ,password:'jagini'});
+newuser.save(function(err){
+	if(err){console.log(err);
+	}
+	else{
+	//	console.log('new user added ');
+	}
+});
+
+app.set('view engine', 'ejs')
+app.use(bodyParser.urlencoded({extended: true}))
+app.use(bodyParser.json())
+app.use(express.static('public'))
+
+
+app.get('/', (req, res) => {
+  db.collection('users').find().toArray((err, result) => {
+    if (err) return console.log(err)
+    res.render('index.ejs', {users: result})
+  })
+})
+
+app.post('/quotes', (req, res) => {
+  db.collection('users').save(req.body, (err, result) => {
+    if (err) return console.log(err)
+    console.log('saved to database')
+    res.redirect('/')
+  })
+})
+
+app.put('/quotes', (req, res) => {
+  db.collection('users')
+  .findOneAndUpdate({name: 'sravani'}, {
+    $set: {
+      name: req.body.name,
+      password: req.body.password
+    }
+  }, {
+    sort: {_id: -1},
+    upsert: true
+  }, (err, result) => {
+    if (err) return res.send(err)
+    res.send(result)
+  })
+})
+
