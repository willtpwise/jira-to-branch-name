const { kebabCase } = require("lodash");

const jiraToBranchName = (input) => {
  const [rawJiraId, parsedJiraId] = parseJiraId(input);
  const parsedSummary = parseSummary(input, rawJiraId);

  return [parsedJiraId, parsedSummary].filter(Boolean).join("-");
};

const parseJiraId = (input) => {
  const jiraId = input.match(/^[A-Z]+(-| )[0-9]+/);

  if (!jiraId) {
    return [null, null];
  }

  return [jiraId[0], jiraId[0].replace(/ /g, "-")];
};

const parseSummary = (input, jiraId) => {
  const summary = jiraId ? input.replace(jiraId, "") : input;
  return kebabCase(summary.trim());
};

module.exports = { jiraToBranchName };
