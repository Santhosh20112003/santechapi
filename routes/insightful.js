const router = require("express").Router();
const insightfulcheck = require("../check/insightful");
const supabase = require("../supabase/supabase");

router.get("/random", insightfulcheck, async (req, res) => {
  try {
    const { data } = await supabase.from("blogs").select("*").limit(20);

    const posts = data.map((blog) => ({
      blogid: blog.blogid,
      title: blog.title,
      content: blog.content,
      creation_time: blog.creation_time,
      image: blog.image,
      tag: blog.tag,
      url: `https://insightfulblog.vercel.app/blogs/${btoa(blog.blogid)}`,
    }));

    if (!posts || !Array.isArray(posts) || posts.length === 0) {
      throw new Error("No posts available");
    }

    let randomIndex = Math.floor(Math.random() * posts.length);

    res.json(posts[randomIndex]);
  } catch (error) {
    console.error(error);
    res.status(500).json("An error occurred in the backend");
  }
});

router.post("/fetchblogsbyuid",insightfulcheck, async (req, res) => {
  const { uid } = req.body;

  try {
    if (!uid) {
      return res
        .status(400)
        .json({ error: "User id (uid) is required in the request body" });
    }

    const { data: userBlogs, error: queryError } = await supabase
      .from("blogs")
      .select("*")
      .eq("uid", uid)
      .order("creation_time");

    if (queryError) {
      throw new Error(queryError.message);
    }

    res.status(200).json(userBlogs || []);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching user's blogs." });
  }
});


module.exports = router;
