<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="decription" content="Canvas drawer" />

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />

    <title>Drawer</title>
</head>

<body>
    <nav class="navbar navbar-dark" style="background-color: #303530">
        <div class="container-fluid text-light">
            <div class="row" id="Reset">
                <div class="col fs-3">Toolbar</div>
            </div>
            <div class="row">
                <div class="col">
                    <button type="button" class="btn text-light bg-danger btn-lg" id="red"
                        onclick="changeColor(this.id)"></button>
                </div>
                <div class="col">
                    <button type="button" class="btn text-light bg-info btn-lg" id="blue"
                        onclick="changeColor(this.id)"></button>
                </div>
                <div class="col">
                    <button type="button" class="btn text-light bg-success btn-lg" id="green"
                        onclick="changeColor(this.id)"></button>
                </div>
                <div class="col">
                    <button type="button" class="btn text-dark bg-light btn-lg" id="white"
                        onclick="changeColor(this.id)"></button>
                </div>
                <div class="col">
                    <button type="button" class="btn text-light bg-dark btn-lg" id="black"
                        onclick="changeColor(this.id)"></button>
                </div>
            </div>
        </div>
    </nav>

    <div class="container-fluid w-100% bg-dark" style="height: 590px">
        <div class="row" style="height: 590px">
            <div class="col">
                <canvas class="position-absolute" id="can" width="1300" height="560px" style="
							background-color: white;
							left: 30px;
							bottom: 10px;
							border: 3px solid gray;
						"></canvas>
                <!--Add a script that changes the height of this element when size of page changes-->
            </div>
        </div>
    </div>

    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: Bootstrap Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0"
        crossorigin="anonymous"></script>

    <script src="index.js"></script>
</body>

</html>
