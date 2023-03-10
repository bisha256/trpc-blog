# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.2.0](https://github.com/bisha256/trpc-blog/compare/v0.1.0...v0.2.0) (2023-03-10)


### Features

* **components:** add comment form component ([ed92aba](https://github.com/bisha256/trpc-blog/commit/ed92abad1911e714850ab86a897f26481b0eed87))
* **components:** add comments component to render post comments ([dffa0cb](https://github.com/bisha256/trpc-blog/commit/dffa0cb90a67f097fc476fbe291bdca05ac91083))
* **migrations:** generate add comment model ([072ff16](https://github.com/bisha256/trpc-blog/commit/072ff167ddd83ddd82e6cacd2da30ddde14d7446))
* **pages:** add comment form to post details page ([c3aa435](https://github.com/bisha256/trpc-blog/commit/c3aa435a005e7dea379491e9eb9f2f7cab8b5746))
* **pages:** add comments component to post details page ([ead1e7d](https://github.com/bisha256/trpc-blog/commit/ead1e7dc8d1e956ff3f891ed9c3af6d6db627a12))
* **pages:** add post details page ([94cfeda](https://github.com/bisha256/trpc-blog/commit/94cfeda7b1c1100ea7a0f6cadd7b54bdfa54589d))
* **pages:** add title to post details page ([18c502c](https://github.com/bisha256/trpc-blog/commit/18c502c93e829a9274a1804c0d3be880c6a7690c))
* **pages:** make links out of posts on the homepage ([9dea8f5](https://github.com/bisha256/trpc-blog/commit/9dea8f5fad09d004919f6fd9974fc87ee05215e9))
* **router:** add comments router to trpc routes ([02f7b66](https://github.com/bisha256/trpc-blog/commit/02f7b663e0dfaa9740349b6f1001035c75727c4a))
* **router:** add create comment to comments router ([5973729](https://github.com/bisha256/trpc-blog/commit/597372962836206078b55ec954c34f9add922944))
* **router:** add get post by id to posts router ([2d50a1c](https://github.com/bisha256/trpc-blog/commit/2d50a1cd55b5b6d9ab565c8c83d8e42e57be127c))
* **router:** include post comments in get post by id route ([5119854](https://github.com/bisha256/trpc-blog/commit/511985402710ee87c916056a5ce87de382721484))
* **schema:** add comment model ([29710c7](https://github.com/bisha256/trpc-blog/commit/29710c77f53d8b5f415c8960f201c4b3b4cf387d))


### Bug Fixes

* **components:** invalidate get post by id query after comments create mutation ([6ff316b](https://github.com/bisha256/trpc-blog/commit/6ff316b6563e958cf45a8c21ddd3615f18c70ef8))
* **pages:** ensure query data exists or render not found ([50a8412](https://github.com/bisha256/trpc-blog/commit/50a8412f0621e5ce77effd438cf9b773bb4a8357))

## 0.1.0 (2023-03-10)


### Features

* **migrations:** generate add post model prisma migration e9e23ac
* **migrations:** generate initial prisma migration 04bdef4
* **pages:** add posts create page e454530
* **pages:** add posts home page 3117ca5
* **router:** add create post to posts router c4ce1ff
* **router:** add get posts to posts router 5e25a65
* **router:** add posts router b8ac08b
* **schema:** add post model 42ecf09
