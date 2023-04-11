;(() => {
  type Gender = 'M' | 'F'

  interface PersonProps {
    name: string
    gender: Gender
    birthdate: Date
  }

  class Person {
    public birthdate: Date
    public gender: Gender
    public name: string

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name
      this.gender = gender
      this.birthdate = birthdate
    }
  }

  interface UserProps extends PersonProps {
    email: string
    role: string
  }

  class User extends Person {
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate })
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string,
    lastOpenFolder: string,
  }
  class UserSettings extends User {
    public lastOpenFolder: string
    public workingDirectory: string

    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      name,
      gender,
      birthdate
    }: UserSettingsProps) {
      super({email, role, name, gender, birthdate})
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

  const userSettings = new UserSettings({
    birthdate: new Date('1993-08-20'),
    email: 'apu314@gmail.com',
    gender: 'M',
    lastOpenFolder: '/home',
    name: 'Adolfo',
    role: 'Admin',
    workingDirectory: '/usr/home'
  })
  console.log({
    userSettings,
    areCredentialsValid: userSettings.checkCredentials()
  })
})()
