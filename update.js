const { batch } = require("frontmatter-file-batcher");
// import { batch } from "file-batcher";

// A sane limit of 100 concurrent operations.
batch("content/posts/**.md", 100, async ({ goods, actions }) => {
  const { update, save, categories } = actions;
  const { title, url } = goods.data;

  const mods = {
    $unset: [
      "author",
      "type",
      "excerpt",
      "mf2_photo",
      "mf2_syndication",
      "mf2_published",
      "mf2_type",
      "micropub_auth_response",
    ],
  };
  if (categories) {
    mods.categories = {
      $unset: ["Uncategorized"],
    };
  }
  if (title && title.trim().startsWith("'") && title.trim().endsWith("'")) {
    mods.title = { $set: title.slice(1, len(title) - 1) };
  }
  if (url) {
    const path = url.split("/");
    path.reverse();

    let slug = path[0];
    if (slug.trim() == "") {
      slug = path[1];
    }

    mods.slug = { $set: slug };
    mods.$unset.push('url')
  }

  const newData = update({
    data: mods,
  });

  // At the end you can save your post with the new data.
  await save(newData);

  console.log("Just saved:", goods.path);
});
