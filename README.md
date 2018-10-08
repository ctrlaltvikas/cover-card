<<<<<<< HEAD
# Cover-card jekyll theme

The aim of this theme is to remain simple and updated. As Antoine de Saint-Exupery said:

> Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away.

## Design

The design of this theme is defined by the following features that IT DOES NOT HAVE:

### Blog

I love blogs. I have been making and following blogs since blogs existed in the early 2000s. The reality is that the vast majority of the blogs back then do not exist anymore. I can safely predict that the vast majority of the blogs that are around nowadays will not exist soon, even the popular ones.

Don't get me wrong: Jekyll is an excellent system for making blogs, but your main web site should not be build around a blog. A blog is just an add-on to your main site that should be easy to turn off, or to switch to the next great blogging platform, system, or social media profile that supports blogging. Even [the father of jekyll](http://tom.preston-werner.com/) is not blogging very much over the years, then why have the blog at the center of the online presence. A blog is nice to have but it is not a must have.

I understand that a jekyll theme without a blog might sound like a self contradiction, but jekyll has also motivated something even more useful than itself: seamless hosting with Github Pages. This theme takes advantage of both jekyll and Github Pages, in order to create something similar to [about.me](https://about.me/), without the price tag.

### Folders and files



## Implementation

[A working example](https://epidrome.github.io/cover-card) demonstrates that the new [jekyll remote theme](https://github.com/blog/2464-use-any-theme-with-github-pages) functionally efficiently separates content from presentation, so you can keep in your repository only the custom assets, e.g., images, configuration, while the remote theme seamlessly takes care of the beatifully simple presentation.

In this way, you will receive future updates without pulling and resolving conflicts from the main theme. In the case that you don't like a particular update (e.g. font change, or font size), you can always [revert your remote_theme to the last known good configuration by pointing to a particular commit](https://github.com/benbalter/jekyll-remote-theme). Moreover, it becomes easier to switch to other similar themes.

### Set-up for end-users

Just fork the [default repository](https://github.com/epidrome/cover-card), which has been set to be the gh-pages one, because it makes it easier for average users to fork and use.

### Set-up for development

This theme is easier for new jekyll users to fork and use. One side effect of this choice is that it is harder for advanced users to contribute, but this should not be a problem for the expert user.

1. git clone https://github.com/epidrome/cover-card.git
2. cd cover-card
3. git checkout master
4. git pull

Then you can test the theme on gh-pages and develop new features on master branch.

## Contributing

Fork this repository and submit a pull-request for a bug or an improvement at the **master branch**.

## Credits

Credits and inspiration for this theme go to [front cover theme](https://dashingcode.github.io/front-cover/), jekyll remote theme, and being lazy to keep my web page updated with the latest standards and trends.
=======
# Cover Card jekyll theme

Create a cover page for your social media profiles, host it for free on Github Pages, and maintain it in minutes, not hours. [Demo](https://epidrome.github.io/cover-card)

This theme is ideal for people or organizations who are busy enjoying their life or business and who want a simple business card for their online presence.

Please keep this README file because it contains the credits at the end and it might become handy after you have completely forgoten the set-up instructions.

## Design rationale

The design rationale of this theme is to do less than other themes: "Less is more"

The majority (99%) of the availabe jekyll themes offers a blog, but I have never been able to keep blog content (or its technology) updated over time.

Let's be honest with ourselves: How does an (abandoned) blog centered web site looks to new visitors if we have not posted since two years ago?

## Make it yours

[Fork this repository](https://github.com/epidrome/cover-card/fork) and edit the files to your liking: As a first step, you may want to replace the images and edit the `_config.yml` with your online profiles. You can test the result almost in real-time at the Github Pages url displayed in the Settings tab.

### Avatar or Logo

The avatar image should be square and at least 200 pixels. Chances are that you have a selfie somewhere in your media storage. If you are making a page for a business or product, then use a logo.

### Background image sets the mood

There is no aspect ratio requirement for the background image, but it should be big enough for contemporary (desktop, tablet, phone) computer displays and dark enough in order to work for the white foreground text and icons.

### Social profiles

Edit the `_config.yml` file with your social media profiles by adding the respective acount name, not the full link. You can delete or comment out the social media that you don't need.

### Working example

You can [inspect a working example of the configuration file](https://github.com/epidrome/home/blob/master/_config.yml).

### Updates

Please note that the theme is currently in beta, so some updates at the [master branch](https://github.com/epidrome/cover-card/tree/master) might break your site. Don't panic! 

You can visit [releases](https://github.com/epidrome/cover-card/releases) and check for bugs and new features.

If you wish to keep your theme frozen and not receive updates, then you can [revert your remote_theme to the last known good configuration](https://github.com/benbalter/jekyll-remote-theme) by pointing to [a particular commit](https://github.com/epidrome/cover-card/commits/master).

### Expert options

You can find and locally overide advanced options (custom domain name, extra social icons, font styles) for this theme in the documentation (readme) at the [master branch](https://github.com/epidrome/cover-card/tree/master).

## Credits

This page is based on the [cover-card jekyll remote theme](https://github.com/epidrome/cover-card/tree/master).

Background photo by Anders Jildén and avatar photo by Ayo Ogunseinde, both on [Unsplash](https://unsplash.com/)
>>>>>>> gh-pages
