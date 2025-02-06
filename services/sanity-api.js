import { client } from "@/client-config"
import { groq } from "next-sanity"

export async function getProjects(locale) {
  if (locale === "en") {
    return client.fetch(
      groq`*[_type == "project"]{
        title,
        demo,
        "description": description_en,
        "slug": slug.current,
        "image": image.asset->url,
      }`
    )
  } else {
    return client.fetch(
      groq`*[_type == "project"]{
        title,
        demo,
        "description": description_id,
        "slug": slug.current,
        "image": image.asset->url,
      }`
    )
  }
}

export async function getProject(slug, locale) {
  if (locale === "en") {
    return client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        title,
        demo,
        github,
        "features": features_en,
        "techstack": techstack[]->title,
        "image": image.asset->url,
        "body": body_en,
      }`, { slug }
    )
  } else {
    return client.fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        title,
        demo,
        github,
        "features": features_id,
        "techstack": techstack[]->title,
        "image": image.asset->url,
        "body": body_id,
      }`, { slug }
    )
  }
}

export async function getPosts(locale) {
  if (locale === "en") {
    return client.fetch(
      groq`*[_type == "post"]{
        title,
        "description": description_en,
        "slug": slug.current,
        "author": author->name,
        "authorImage": author->image.asset->url,
        "image": mainImage.asset->url,
        publishedAt,
      }`
    )
  } else {
    return client.fetch(
      groq`*[_type == "post"]{
        "title": title_id,
        "description": description_id,
        "slug": slug.current,
        "author": author->name,
        "authorImage": author->image.asset->url,
        "image": mainImage.asset->url,
        publishedAt,
      }`
    )
  }
}

export async function getPost(slug, locale) {
  if (locale === "en") {
    return client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        title,
        "author": author->name,
        "authorImage": author->image.asset->url,
        "image": mainImage.asset->url,
        "categories": categories[]->title,
        "body": body_en,
        publishedAt,
      }`, { slug }
    )
  } else {
    return client.fetch(
      groq`*[_type == "post" && slug.current == $slug][0]{
        "title": title_id,
        "author": author->name,
        "authorImage": author->image.asset->url,
        "image": mainImage.asset->url,
        "categories": categories[]->title,
        "body": body_id,
        publishedAt,
      }`, { slug }
    )
  }
}