@extends ('layouts.master')

  @section ('content')

    <div class="col-sm-8">

      <h1>Sign in</h1>

      <form class="" action="/login" method="post">

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

        <div>

          @include('layouts.error')

        </div>

      </form>

    </div>

  @endsection
