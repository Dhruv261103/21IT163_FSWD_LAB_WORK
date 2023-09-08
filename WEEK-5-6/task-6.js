function getEnvironmentVariableValue(variableName) {
    if (process.env.hasOwnProperty(variableName)) {
      return process.env[variableName];
    } else {
      return `Environment variable '${variableName}' not found.`;
    }
  }
  
  // Example usage:
  const variableName = 'COMMAND_MODE';
  const variableValue = getEnvironmentVariableValue(variableName);
  console.log(`${variableName} = ${variableValue}`);
  