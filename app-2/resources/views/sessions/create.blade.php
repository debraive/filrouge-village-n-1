@extends ('layouts.master')


  @section ('content')

    <div class="col-sm-8">

      <div class="login-card">
          <h1>Log-in</h1><br>
        <form action"/login" method="post">
          @csrf
          <input type="email" class="form-control" id="email" name="email" placeholder="Email" required>
          <input type="password" class="form-control" id="password" name="password" placeholder="Password" required>
          <input type="submit" id="submit" name="login" class="login login-submit" value="Login">
        </form>

        <div class="login-help">
          <a href="#">Forgot Password ?</a>
        </div>
      </div>

        <div>

          @include('layouts.error')

        </div>



    </div>

  @endsection

  <!-- <form class="" action="/login" method="post">

    @csrf

    <div class="form-group" >

      <label for="email">Email:</label>

      <input type="email" class="form-control" id="email" name='email' required>

    </div>

    <div class="form-group" >

      <label for="password">Password:</label>

      <input type="password" class="form-control" id="password" name='password' required>

    </div>



    <div class="form-group">

        <button type="submit" class="btn btn-primary">Se Connecter </button>

    </div>
 -->
