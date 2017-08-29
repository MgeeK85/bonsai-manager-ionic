'use strict';

module.exports = function(Bonsai) {
    Bonsai.beforeRemote('create', function(ctx, modelInstance, next) {
        ctx.args.data.userId = ctx.req.accessToken.userId;
        next();
    });

};
