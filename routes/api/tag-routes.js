const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/',async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  const tag=await Product.findAll({
    include:[Product]
  });
  res.json(tag);
});

router.get('/:id', async(req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tags=await Category.findOne({
    where:{
      id:req.params.id
    }
  });
  res.json(tags);
});

router.post('/',async (req, res) => {
  // create a new tag
  const product=await Product.findOne({
    where:{
      id:req.params.id
    }
  });
  res.json(product);
});

router.put('/:id', async(req, res) => {
  // update a tag's name by its `id` value
  const updatedTags=await Tag.update(req.body,{
    where:{
      id:req.params.id
    }
  });
  res.json(updatedTags);
});

router.delete('/:id', async(req, res) => {
  // delete on tag by its `id` value
  await Tag.destroy({
    where:{
      id:req.params.id,
    }
  });
  res.json({message: 'deleted'});
});

module.exports = router;
