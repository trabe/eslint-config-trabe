module.exports = {
  // enforce or disallow variable initializations at definition
  "init-declarations": 2,

  // disallow the catch clause parameter name being the same as a variable in the outer scope
  "no-catch-shadow": 2,

  // disallow deletion of variables
  "no-delete-var": 2,

  // disallow labels that share a name with a variable
  "no-label-var": 2,

  // disallow specific globals
  "no-restricted-globals": 0,

  // disallow declaration of variables already declared in the outer scope
  "no-shadow": 0,

  // disallow shadowing of names such as arguments
  "no-shadow-restricted-names": 2,

  // disallow use of undeclared variables unless mentioned in a /*global */ block
  "no-undef": 2,

  // disallow use of undefined when initializing variables
  "no-undef-init": 2,

  // disallow use of undefined variable
  "no-undefined": 2,

  // disallow declaration of variables that are not used in the code
  // WARNING: We ignore React because "import React, { Component }"
  // triggers the rule for React (seems that react/jsx-uses-react is not
  // doing its job
  "no-unused-vars": [2, {
    "vars": "local",
    "args": "after-used",
    "varsIgnorePattern": "React",
  }],

  // disallow use of variables before they are defined
  "no-use-before-define": [2, { "functions": false, "classes": false }],
};
