define({ "api": [
  {
    "type": "get",
    "url": "/greetings/:name",
    "title": "Greetings",
    "version": "1.0.0",
    "group": "Main",
    "name": "Greetings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "optional": false,
            "field": ":name",
            "description": "<p>Your name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    \"message\": \"Hello, Jhon!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/",
    "title": "Hello World",
    "version": "1.0.0",
    "group": "Main",
    "name": "HelloWorld",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Response-Example:",
          "content": "{\n    \"message\": \"Hello World!\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/error",
    "title": "Internal Error",
    "version": "1.0.0",
    "group": "Main",
    "name": "InternalError",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 500 Internal Error",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/not-found",
    "title": "Not Found",
    "version": "1.0.0",
    "group": "Main",
    "name": "NotFound",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Main"
  },
  {
    "type": "get",
    "url": "/timeout",
    "title": "Timeout",
    "version": "1.0.0",
    "group": "Main",
    "name": "Timeout",
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 503 Service Unavailable",
          "type": "json"
        }
      ]
    },
    "filename": "src/routes.ts",
    "groupTitle": "Main"
  }
] });
