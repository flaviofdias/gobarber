import User from '../models/User';
import File from '../models/File';

class ProviderController {
  async index(req, res) {
    const providers = await User.findAll({
      where: { provider: true },
      attributes: ['id', 'name', 'email', 'avatar_id'], // Definindo atributos a serem exibidos
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['name', 'path', 'url'], // Definindo atributos a serem exibidos
        },
      ],
    });

    return res.json(providers);
  }
}

export default new ProviderController();
