@component('mail::message')
Поштовани,


Уочена је грешка на серверу:



- Грешка: {{ $errorMessage }}
- Фајл: {{ $errorFile }}
- Линија: {{ $errorLine }}
@if($errorRouteName)
- Назив руте: {{ $errorRouteName }}
@endif
- Време грешке: {{ $errorTime }}
@if($user)
- Корисник: {{ $user }}
@endif
@if($userId)
- ИД корисника: {{ $userId }}
@endif
@if($enteredParameters)
- Унети параметри: {{ $enteredParameters }}
@endif



Срдачан поздрав,


Администрација ИСКМ града Београда
@endcomponent
