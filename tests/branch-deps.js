// This file was autogenerated by calcdeps.py
goog.addDependency("../../../../../src/0_config.js", ['config'], []);
goog.addDependency("../../../../../src/0_utils.js", ['utils'], []);
goog.addDependency("../../../../../src/1_api.js", ['api'], ['config', 'utils']);
goog.addDependency("../../../../../src/1_elements.js", ['elements'], ['utils']);
goog.addDependency("../../../../../src/1_resources.js", ['resources'], ['utils', 'config']);
goog.addDependency("../../../../../src/2_branch.js", ['Branch'], ['utils', 'resources', 'api', 'elements']);
goog.addDependency("../../../../../src/3_branch_instance.js", ['branch_instance'], ['Branch']);
goog.addDependency("../../../../../src/4_umd.js", [], ['branch_instance']);
goog.addDependency("../../../../../src/extern.js", [], []);
goog.addDependency("../../../../../src/onpage.js", [], []);
goog.addDependency("../../../../../tests/2_branch_tests.js", [], []);
