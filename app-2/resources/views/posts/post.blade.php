



      <div class="post">
      <div class="post-img">
        <img src="{{asset('images/' . $post->image)}}" alt="">
      </div>
      <div class="post-contain">
      <h1>{{$post->title}}</h1>
        <p class="blog-post-meta">{{$post->created_at->toFormattedDateString()}}</p>
        <ul class="list-group">

          <li class="list-group-item">

            {{$post->body}}
          </li>

        </ul>
          @if(Auth::check())
          <div class="edit">
            {!! Form::open(['route' => ['posts.edit', $post->id],'method' => 'get']) !!}
            {{ Form::submit('Editer', ['class' => 'login login-submit'])}}
            {!! Form::close() !!}
          <!-- <a href="{{ route('posts.edit', $post->id) }}">Edit</a> -->
          </div>
            <div class="delete">
            {!! Form::open(['route' => ['posts.destroy', $post->id],'method' => 'delete']) !!}
            {{ Form::submit('Supprimer', ['class' => 'login login-submit'])}}
            {!! Form::close() !!}
        </div>
          @endif
        </div>
      </div>


<!-- <div class="blog-post">
<img src="{{asset('images/' . $post->image)}}" alt="">
  <a href="/posts/{{$post->id}}">

    <h2 class="blog-post-title">{{$post->title}}</h2>

  </a>

  <p class="blog-post-meta">{{$post->user->name}} on {{$post->created_at->toFormattedDateString()}}</p>

  {{$post->body}}

</div><!- /.blog-post -->
