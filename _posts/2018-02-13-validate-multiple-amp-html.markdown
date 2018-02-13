---
layout: post
thumb: Thumb-4.jpg
title: Validate multiple AMP HTML using amphtml-validator
hidden : true
description: Make your life easier while developing AMP site using amphtml-validator
---

## Validate AMP html in current folder and subfolder
Tested on windows machine,
This is just some quick way to validate multiple AMP html using amphtml-validator

Dependency:
- amphtml-validator

  run `npm install -g amphtml-validator` to install globally
- ruby

## Folder structure example
(for ilustration only)
```
. (current folder)
|   grid.css
|   index.html
|   index2.html
|   rakefile
|
+---new
      index3.html
```

## rakefile
create rakefile in the root of your project with following code:

```ruby
require 'colorize'

desc 'Test website AMP validation'
task :amp do
  puts 'Running AMP Validator...'.yellow.bold
  # basedir = '.'
  files = Dir.glob("**/*.html")
    files.each do |file|
      system("amphtml-validator #{file}")
    end
  end
```
## Run rake
on your terminal / command promt, run `rake amp`

## Output
Sample output, depend on your actual file.
Here, my index2.html failed because my html tag was wrong.

```
Running AMP Validator...
index.html: PASS
index2.html:2:0 The mandatory attribute '⚡' is missing in tag 'html ⚡ for top-level html'. (see https://www.ampproject.org/docs/reference/spec#required-markup)
new/index3.html: PASS
```