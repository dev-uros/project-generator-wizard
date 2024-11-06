@component('mail::message')
Poštovani {{$user->name}} {{$user->surname}},


Da biste aktivirali Vaš nalog, kliknite na opciju Aktiviraj nalog i unesite željenu lozinku.

Nakon unosa željene lozinke, bićete ulogovani na sistem.


Za buduće prijavljivanje na sistem, koristite Vaše korisničko ime {{$user->user_name}}

i definisanu lozinku.

@component('mail::button', ['url' => $url])
Aktiviraj nalog
@endcomponent


Srdačan pozdrav
@endcomponent
