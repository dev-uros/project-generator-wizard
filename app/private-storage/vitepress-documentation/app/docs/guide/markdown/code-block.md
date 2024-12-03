# Code Block

Table of content

[[toc]]


*List of all supported languages can be found at [https://shiki.style/languages]*
## Syntax Highlighting


### Javascript

```js
export default {
  name: 'MyComponent',
  // ...
}
```

### Html

```html
<ul>
  <li v-for="todo in todos" :key="todo.id">
    {{ todo.text }}
  </li>
</ul>
```

### Php

```php
<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
use Illuminate\Testing\Fluent\Concerns\Has;

class UserRepository implements UserRepositoryInterface
{

    public function store($data)
    {
        return User::create([
            'name' => $data['name'],
            'surname' => $data['surname'],
            'email' => $data['email'],
            'password' => Hash::make(Str::random(64)),
            'is_admin'=>false,
            'is_active'=>false
        ]);
    }

}
```
### SQL

```plsql
-- Drop the pets table if it already exists (optional, to ensure clean setup)
DROP TABLE IF EXISTS pets;

-- Create the pets table
CREATE TABLE pets (
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, -- Unique identifier
    animal_type VARCHAR(50) NOT NULL,  -- Type of the animal (e.g., Dog, Cat)
    name VARCHAR(50) NOT NULL,         -- Animal's name
    nickname VARCHAR(50),              -- Optional nickname
    date_of_birth DATE NOT NULL,       -- Date of birth
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Record creation timestamp
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Record update timestamp
);

-- Insert sample data into the pets table
INSERT INTO pets (animal_type, name, nickname, date_of_birth) VALUES
('Dog', 'Buddy', 'Bud', '2020-05-10'),
('Cat', 'Whiskers', 'Whisky', '2018-08-22'),
('Rabbit', 'Snowball', NULL, '2022-01-15'),
('Parrot', 'Polly', 'Chatterbox', '2019-03-30'),
('Hamster', 'Hammy', 'Speedy', '2021-07-18');

```


## Line Highlighting

### Single line
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

### Multiple single lines or range

```js{1,4,6-8}
export default { // Highlighted
  data () {
    return {
      msg: `Highlighted!
      This line isn't highlighted,
      but this and the next 2 are.`,
      motd: 'VitePress is awesome',
      lorem: 'ipsum'
    }
  }
}
```


## Focus in code block

```js
export default {
  data () {
    return {
      msg: 'Focused!' // [!code focus]
    }
  }
}
```

## Colored diffs in code blocks

```js
export default {
  data () {
    return {
      msg: 'Removed' // [!code --]
      msg: 'Added' // [!code ++]
    }
  }
}
```

## Errors and Warning in code blocks

```js
export default {
  data () {
    return {
      msg: 'Error', // [!code error]
      msg: 'Warning' // [!code warning]
    }
  }
}
```

## Large code snippets

<<< @/code-snippets/large-code-snippet.php


## Code Groups

::: code-group

<<< @/code-snippets/pet-repository-snippet.ts [petRepository.ts]

<<< @/code-snippets/pet-repository-interface-snippet.ts [petRepositoryInterface.ts]

:::

