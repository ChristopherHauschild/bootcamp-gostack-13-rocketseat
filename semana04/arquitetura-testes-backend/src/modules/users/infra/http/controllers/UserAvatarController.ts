import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import UpdateAvatarUserService from '@modules/users/services/UpdateUserAvatarService';

export default class UsersController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateAvatarUserService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id, // ensureAuthenticated
      avatarFilename: request.file.filename,
    });

    return response.json(classToClass(user));
  }
}
