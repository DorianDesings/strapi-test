'use strict';

/**
 * farm service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::farm.farm');
