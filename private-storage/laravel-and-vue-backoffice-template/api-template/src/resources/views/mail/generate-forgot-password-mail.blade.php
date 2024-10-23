@component('mail::message')
Poštovani {{$user->name}} {{$user->surname}},

Da biste promenili lozinku, kliknite na opciju *Promena lozinke* i unesite željenu lozinku.

@component('mail::button', ['url' => $url])
Promena lozinke
@endcomponent

Srdačan pozdrav
@endcomponent
