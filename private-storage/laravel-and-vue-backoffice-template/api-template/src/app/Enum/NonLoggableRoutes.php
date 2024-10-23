<?php
namespace App\Enum;

enum NonLoggableRoutes : string{
    public const LOGIN = 'login';

    public const LOGOUT = 'logout';

    public const RESET_PASSWORD = 'reset-password';

    public const FORGOT_PASSWORD = 'forgot-password';

    public const ACTIVATE_ACCOUNT = 'activate-account';

    public const AUTO_LOGIN = 'auto-login';

}
