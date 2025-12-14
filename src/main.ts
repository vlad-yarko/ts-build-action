import * as core from '@actions/core'

export async function run(): Promise<void> {
  try {
    const name: string = core.getInput('name')
    const greeting: string = `Hello, ${name}!`

    core.setOutput('greeting', greeting)
    console.log(greeting)
  } catch (error: unknown) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    } else {
      core.setFailed('An unknown error occurred')
    }
  }
}

// auto-run when executed directly
run()
