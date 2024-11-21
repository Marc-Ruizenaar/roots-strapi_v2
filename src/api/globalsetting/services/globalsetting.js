'use strict';

/**
 * globalsetting service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::globalsetting.globalsetting');
