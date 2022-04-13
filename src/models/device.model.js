const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const deviceSchema = mongoose.Schema({
  uuid: {
    type: String,
  },
  userAgent: {
    type: String,
  },
  email: {
    type: String,
  },
  state: {
    online: {
      type: Boolean,
    },
    popup: {
      currentTab: {
        type: String,
      },
      allowedSites: [],
    },
    execution: {
      isActive: {
        type: Boolean,
      },
      currentStepId: {
        type: String,
      },
      activeTabId: {
        type: String,
      },
    },
  },
});

// add plugin that converts mongoose to json
deviceSchema.plugin(toJSON);
deviceSchema.plugin(paginate);

/**
 * @typedef Device
 */
const Device = mongoose.model('Device', deviceSchema);

module.exports = Device;
