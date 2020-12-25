FORMAT: 1A
HOST: http://localhost:3000
# The Simplest API
Very usefull tools to remember API. This api was built using nodejs and postgres database.

# Group Tools
Group of all tools related resources

### Index [GET /tools/{?tag}]

+ Parameters

    + tag: `node` (optional) - tag name

+ Request JSON Message

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 200 (aplication/json)

    + Attributes (array)
        + (object)
            + id: `d7a4ca7f-cbdb-449f-83c1-9516b227705e`
            + title: `Some title`
            + link: `http://mylink.com`
            + description: `Some description`
            + created_at: `2020-12-25T00:14:35.916Z`
            + updated_at: `2020-12-25T00:14:35.916Z`
            + tags (array):
                + (object):
                    + id: `d7a4ca7f-cbdb-449f-83c1-9516b227705e`
                    + name: `Node`,
                    + created_at: `2020-12-24T22:12:31.529Z`
                    + updated_at: `2020-12-24T22:12:31.529Z`

+ Response 500 (aplication/json)

        {
            "message": "Internal Server Error"
        }

### Show [GET /tools/{id}]

+ Parameters

     + id: `7bdf05f3-03aa-4629-be43-d0ba6b651f22` (string) - UUID

+ Request JSON Message

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 200 (aplication/json)

    + Attributes (object)
        + id: `d7a4ca7f-cbdb-449f-83c1-9516b227705e`
        + title: `Some title`
        + link: `http://mylink.com`
        + description: `Some description`
        + created_at: `2020-12-25T00:14:35.916Z`
        + updated_at: `2020-12-25T00:14:35.916Z`
        + tags (array):
            + (object):
                 + id: `d7a4ca7f-cbdb-449f-83c1-9516b227705e`
                 + name: `Node`,
                 + created_at: `2020-12-24T22:12:31.529Z`
                 + updated_at: `2020-12-24T22:12:31.529Z`

+ Response 500 (aplication/json)

    + Attributes (object)
        + message: `Internal Server Error`

### Update [PUT /tools/{id}]

+ Parameters

     + id: `7bdf05f3-03aa-4629-be43-d0ba6b651f22` (string) - UUID

+ Request JSON Message

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Body
        {
            "title": "some title",
            "link": "http://mylink.com",
            "description": "Some description"
        }


+ Response 201 (aplication/json)

    + Attributes (object)
        + id: `d7a4ca7f-cbdb-449f-83c1-9516b227705e`
        + title: `Some title`
        + link: `http://mylink.com`
        + description: `Some description`
        + created_at: `2020-12-25T00:14:35.916Z`
        + updated_at: `2020-12-25T00:14:35.916Z`


+ Response 500 (aplication/json)

    + Attributes (object)
        + message: `Internal Server Error`

### Store [POST]

+ Request JSON Message

    + Headers

            Accept: application/json
            Content-Type: application/json

    + Body
        {
            "title": "some title",
            "link": "http://mylink.com",
            "description": "Some description"
        }


+ Response 201 (aplication/json)

    + Attributes (object)
        + id: `d7a4ca7f-cbdb-449f-83c1-9516b227705e`
        + title: `Some title`
        + link: `http://mylink.com`
        + description: `Some description`
        + created_at: `2020-12-25T00:14:35.916Z`
        + updated_at: `2020-12-25T00:14:35.916Z`


+ Response 500 (aplication/json)

    + Attributes (object)
        + message: `Internal Server Error`

### Destroy [DELETE /tools/{id}]

+ Parameters

     + id: `7bdf05f3-03aa-4629-be43-d0ba6b651f22` (string) - UUID

+ Request JSON Message

    + Headers

            Accept: application/json
            Content-Type: application/json

+ Response 204 (aplication/json)

+ Response 404 (aplication/json)

    + Attributes (object)
        + message: `Resource not found`

+ Response 500 (aplication/json)

    + Attributes (object)
        + message: `Internal Server Error`

# Group Tags
Group of all tags-related resources.

## Tags [/message/{id}]
Here we have added the message `id` parameter as an
[URI Template variable](http://tools.ietf.org/html/rfc6570) in the Message
resource's URI. Note the parameter name `id` is enclosed in curly brackets. We
will discuss this parameter in the `Parameters` section below, where we will
also set its example value to `1` and declare it of an arbitrary 'number' type.

+ Parameters

    + id: 1 (number) - An unique identifier of the message.

### Retrieve a Message [GET]

+ Request Plain Text Message

    + Headers

            Accept: text/plain

+ Response 200 (text/plain)

    + Headers

            X-My-Message-Header: 42

    + Body

            Hello World!

+ Request JSON Message

    + Headers

            Accept: application/json

+ Response 200 (application/json)

    + Headers

            X-My-Message-Header: 42

    + Body

            {
              "id": 1,
              "message": "Hello World!"
            }

### Update a Message [PUT]

+ Request Update Plain Text Message (text/plain)

        All your base are belong to us.

+ Request Update JSON Message (application/json)

        { "message": "All your base are belong to us." }

+ Response 204

## All My Messages [/messages{?limit}]
A resource representing all of my messages in the system.

We have added the query URI template parameter - `limit`. This parameter is
used for limiting the number of results returned by some actions on this
resource. It does not affect every possible action of this resource, therefore
we will discuss it only at the particular action level below.

### Retrieve all Messages [GET]

+ Parameters

    + limit (number, optional) - The maximum number of results to return.
        + Default: `20`

+ Response 200 (application/json)

        [
          {
            "id": 1,
            "message": "Hello World!"
          },
          {
            "id": 2,
            "message": "Time is an illusion. Lunchtime doubly so."
          },
          {
            "id": 3,
            "message": "So long, and thanks for all the fish."
          }
        ]