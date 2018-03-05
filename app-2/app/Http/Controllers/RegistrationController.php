<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\User;

class RegistrationController extends Controller
{
    public function create()
    {
        return view('registration.create');
    }

    public function store()
    {
        //validation du formulaire

        $this->validate(request(), [

              'name' => 'required',

              'email' => 'required|email',

              'password' => 'required|confirmed'

        ]);

        //Enregistrer un nouvel utilisateur

        $user = User::create([
          'name' => request('name'),
          'email' => request('email'),
          'password' => bcrypt(request('password'))

        ]);

        //Connecter l'utilisateur

        auth()->login($user);

        //Redirection vers la homepage

        return redirect()->home();
    }
}
