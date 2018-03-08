@extends('layouts.master')

@section ('content')

@if(Auth::check())
<div class="nav">
  <h1>Mon Compte</h1>
  <a href="/posts/create">Ajouter un article</a>
  <a href="/logout">Se déconnecter</a>
</div>
@endif
  <div class="title">
    <h1>Nos réalisation</h1>
  </div>


       @foreach ($posts as $post)

       @include ('posts.post')

       @endforeach





@endsection
