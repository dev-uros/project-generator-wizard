# Administracija korisnika

Opcija za kreiranje korisnika se može naći u meniju Administracija -> Korisnici

## Kreiranje korisnika

Korisnika aplikacije definišu sledeći podaci:

- Ime korisnika
- Prezime korisnika
- E-mail adresa korisnika

**Pravila za definisanje ovih podataka su:**

| Podaci korisnika | Pravila                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Ime`            | Obavezno polje <br> Minimalno 3 karaktera <br> Maksimalno 255 karaktera                                                                 |
| `Prezime`        | Obavezno polje <br> Minimalno 3 karaktera <br> Maksimalno 255 karaktera                                                                 |
| `E-mail`         | Obavezno polje <br> Minimalno 3 karaktera <br> Maksimalno 255 karaktera <br> Validna e-mail adresa <br> Mora biti jedinstvena u sistemu |

::: tip :information_source: E-mail za aktiviranje naloga
Po uspešnom kreiranju korisnika, na unetu e-mail adresu, korisniku će se poslati poruka sa instrukcijama za definisanje šifre i aktivaciju naloga.
:::

::: details :camera_flash: Sadržaj e-mail za kreiranje naloga
This is a details block.
:::

::: details :movie_camera: Video upustvo kreiranja korisnika
This is a details block.
:::

::: warning :e-mail: Ponovno slanje aktivacionog e-maila
Ukoliko korisnik iz nekog razloga prijavi da mu nije stigao e-mail za aktivaciju naloga, isti mu se može ponovo poslati sa kartice tog korisnika
:::

## Ažuriranje korisnika

**Korisnik se može ažurirati sa kartice tog korisnika(pregled korisnika -> kartica korisnika)**

Podaci koji se mogu ažurirati su:

- Ime korisnika
- Prezime korisnika
- E-mail adresa korisnika

**Pravila za ažuriranje ovih podataka su:**

| Podaci korisnika | Pravila                                                                                                                                 |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `Ime`            | Obavezno polje <br> Minimalno 3 karaktera <br> Maksimalno 255 karaktera                                                                 |
| `Prezime`        | Obavezno polje <br> Minimalno 3 karaktera <br> Maksimalno 255 karaktera                                                                 |
| `E-mail`         | Obavezno polje <br> Minimalno 3 karaktera <br> Maksimalno 255 karaktera <br> Validna e-mail adresa <br> Mora biti jedinstvena u sistemu |

::: details :movie_camera: Video uputstvo ažuriranja korisnika
This is a details block.
:::

## Pregled korisnika

Pregled korisnika predstavlja listu svih korisnika definisanih u sistemu, bilo da su oni aktivni ili deaktivirani.

Iz ovog pregleda se može otvoriti kartica (detalji) svakog korisnika.

::: details :movie_camera: Video upustvo pregled korisnika
This is a details block.
:::

## Aktiviranje/deaktiviranje

U svakom trenutku administrator može aktivirati/deaktivirati korisnički nalog drugog korisnika.

Ukoliko je nalog trenutno aktivan, on se može deaktivirati.

::: danger :rotating_light: Deaktiviranje korisnika
Deaktiviran korisnik više neće imati pravo pristupa sistemu! (nalog se uvek može ponovo aktivirati)
:::

Ukoliko je nalog trenutno deaktiviran, on se može aktivirati.

::: tip :information_source: Aktiviranje korisnika
Kada se korisnik ponovo aktivira, njegova stara šifra i permisije će ponovo biti aktivne
:::

::: details :movie_camera: Video upustvo aktiviranje/deaktiviranje korisnika
This is a details block.
:::
