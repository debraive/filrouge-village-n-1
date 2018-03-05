<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Input;
use App\Post;
use Carbon\Carbon;
use Intervention\Image\ImageManagerStatic;
use Image;

class PostsController extends Controller
{
    public function __construct()
    {
      $this->middleware('auth')->except(['index', 'show']);
    }

    public function index()
    {

      $posts = Post::latest()->get();

       return view('posts.index', compact('posts'));
    }

    public function show(Post $post)
    {

       return view('posts.show', compact('post'));
    }

    public function create()
    {
       return view('posts.create');
    }

    public function delete()
    {
      return view('posts.delete');
    }

    public function store(Request $request)
    {
      $this->validate($request, array(

          'title' => 'required',
          'body' => 'required'

      ));

      $post = new Post;
      $post->title = $request->title;
      $post->body = $request->body;
      $post->user_id = auth()->id();



        $image = $request->file('exampleInputFile');
        $filename = time() . '.' . $image->getClientOriginalExtension();
        $location = public_path('images/' . $filename);
        Image::make($image)->resize(800, 400)->save($location);
        $post->image = $filename;
      

      $post->save();
        //
        // Post::create([
        //
        //   'title' => request('title'),
        //   'body' => request('body'),
        //   'user_id' => auth()->id(),
        //   'image' => $filename
        // ]);

    // creation du nouveau post evac les données
     // $post = new Post;
     // $post->title = request('title');
     // $post->body = request('body');
    //
    // insert le post dans la database
     // $post->save();
    //
    // redirect vers la home page
     return redirect()->home();
    }
}
