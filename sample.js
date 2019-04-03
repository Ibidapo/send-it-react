let User, Tag;

const filterArticle = async (req, res) => {
  const { query: { searchStr, tag, author } } = req;
  let foundAuthorId;
  let foundArticles;
  let foundTag;

  const findAuthorId = async (username) => {
    try {
      const foundAuthorObj = await User.findOne({
        where: {
          username: { [Op.eq]: username }
        }
      });

      return foundAuthorObj.id;
    } catch (e) {
      return undefined;
    }
  };

  const findTag = async (id) => {
    try {
      const foundTagObj = await Tag.findByPk(id);

      return foundTagObj;
    } catch (e) {
      return undefined;
    }
  };

  try {
    if (searchStr && tag && author) {
      foundAuthorId = await findAuthorId(username);
      foundTag = await findTag(tagId);
      foundArticles = await foundTag.getArticles({
        where: {
          authorId: { [Op.eq]: foundAuthorId },
          [Op.or]: [
            { body: { [Op.iLike]: `%${searchString}%` } },
            { title: { [Op.iLike]: `%${searchString}%` } }
          ]
        }
      });
    } else if (searchStr && tag) {
      foundTag = await findTag(tagId);
      foundArticles = await foundTag.getArticles({
        where: {
          [Op.or]: [
            { body: { [Op.iLike]: `%${searchString}%` } },
            { title: { [Op.iLike]: `%${searchString}%` } }
          ]
        }
      });
    } else if (searchStr && author) {
      foundArticles = await getArticlesBySearchAuthorParams(author, searchStr);
    } else if (tag && author) {
      foundArticles = await getArticlesByTagAuthorParams(tag, author);
    } else if (searchStr) {
      foundArticles = await getArticlesBySearchParam(searchStr);
    } else if (tag) {
      foundArticles = await getArticlesByTagParam(tag);
    } else if (author) {
      foundArticles = await getArticlesByAuthorParam(author);
    }

    if (!foundArticles.length) {
      return res.status(404).send({
        status: 'fail',
        data: { message: 'No Article was found' }
      });
    }

    return res.status(200).send({
      status: 'success',
      data: {
        message: 'Articles found',
        articles: foundArticles
      }
    });
  } catch (e) {
    return res.status(500).send({
      status: 'error',
      message: 'Internal server error occurred'
    });
  }
};

export default filterArticle;