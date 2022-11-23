<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Email verification mail</title>
</head>
<body>
<h1 style="text-align: center">Hello {{$name}}, Lets verify you want to be a part of us</h1>
<table>
    <tr>
        <td>Name:</td>
        <td>{{$name}}</td>
    </tr>
    <tr>
        <td>Password:</td>
        <td>{{$password}}</td>
    </tr>
    <tr>
        <td>Address: </td>
        <td>{{$address}}</td>
    </tr>

    <p>If there everything will fine then click here to verify your account</p>
    <a href="http://localhost:3000/registration/{{$verificationCode}}/{{$name}}">Verify</a>

    <div>Thats all. nothing is important for verfication</div>


</table>
</body>
</html>
