@extends ('layouts.master')

@section('stylesheets')

{!! Html::style('css/admin.css') !!}

@endsection

@section ('content')



    <div class="newspost">
      <div class="carre">
      <h1>Publier un post</h1>
        </div>
        </div>
        <div class="form">
          <form method="POST" action="/posts" enctype="multipart/form-data">
            @csrf
            <div class="form-group" >
              <label for="title">Titre :</label>
              <input type="text" class="form-control" id="title" name='title'>
            </div>
            <div class="form-group">
              <label for="Text">Texte :</label>
              <textarea name="body" id="body" class="form-control"></textarea>
            </div>
            <div class="form-group">
              <label for="exampleInputFile">Photo</label>
              <input type="file" name="exampleInputFile" id="exampleInputFile">
            </div>
            <div class="form-group">
                <button type="submit" class="login login-submit">Publier</button>
            </div>
          </form>
    </div>
      @include ('layouts.error')



@endsection
