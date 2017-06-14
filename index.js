+<!DOCTYPE html>
+<html lang="en">
+<head>
+  <meta charset="UTF-8">
+  <title>MY APP</title>
+</head>
+<body>
+  <ul class="users">
+  <% for(var i=0; i<users.length; i++) {%>
+    <li class="users">
+      <span><%= users[i].name %></span>
+      <span><%= users[i].password %></span>
+    </li>
+  <% } %>
+  </ul>
+
+  <form action="/quotes" method="POST">
+    <input type="text" placeholder="name" name="name">
+    <input type="text" placeholder="password" name="password">
+    <button type="submit">Submit</button>
+  </form>
+</body>
+</html> 
