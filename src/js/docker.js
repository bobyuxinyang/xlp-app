import Dockerode from 'dockerode'

const isWindows = () => {
  return process.platform === 'win32'
}

let dockerClient = null

const setupDocker = async () => {
  if (isWindows()) {
    dockerClient = new Dockerode({socketPath: '//./pipe/docker_engine'})
  } else {
    dockerClient = new Dockerode({socketPath: '/var/run/docker.sock'})
  }
  try {
    await dockerClient.version()
  } catch (ex) {
    dockerClient = null
  }
}

export default {
  setup: setupDocker,
  getClient () {
    return dockerClient
  }
}
