;(() => {
  // Aplicando el principio de responsabilidad única
  // Priorizando composición frente a herencia

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

  interface UserProps {
    email: string
    role: string
  }

  class User {
    public email: string
    public lastAccess: Date
    public role: string

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date()
      this.email = email
      this.role = role
    }

    checkCredentials() {
      return true
    }
  }

  interface SettingsProps {
    workingDirectory: string
    lastOpenFolder: string
  }
  class Settings {
    public lastOpenFolder: string
    public workingDirectory: string

    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.lastOpenFolder = lastOpenFolder
      this.workingDirectory = workingDirectory
    }
  }

  interface UserSettingsProps {
    birthdate: Date
    email: string
    gender: Gender
    lastOpenFolder: string
    name: string
    role: string
    workingDirectory: string
  }
  class UserSettings {
    public person: Person
    public user: User
    public settings: Settings

    constructor({
      name, gender, birthdate,
      email, role,
      lastOpenFolder, workingDirectory
    }: UserSettingsProps) {
      this.person = new Person({
        name,
        birthdate,
        gender
      })
      this.user = new User({ email, role })
      this.settings = new Settings({ lastOpenFolder, workingDirectory })
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
    areCredentialsValid: userSettings.user.checkCredentials()
  })
})()
