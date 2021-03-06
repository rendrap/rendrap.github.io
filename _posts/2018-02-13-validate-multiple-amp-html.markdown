---
layout: post
thumb: Thumb-5.jpg
title: Validate multiple AMP HTML
hidden : true
description: Make your life easier while developing AMP site using amphtml-validator and ruby rakefile, the easy way. Step by step tutorial for beginner.
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

There are two main directory where the repo keeps it's images files : `/images` and '/uploads'.
Here, we use gulp-imagemin to compress the images files, in various quality

1. Loseless
2. Lossy 80%, 50%, and 10% to exagerate the compression level, so that we can clearly see the difference.
