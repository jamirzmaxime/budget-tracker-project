#What is this project?
#This project is a budgeting program to prompt me to get better with my finances
#And help others do the same

#What can this project do currently?
#This project can take in basic functionalites that most budgeting apps have
#Getting Inputs for income and expenses while keeping track of users transaction history

#What else to I want this project to do?
#Have an AI assistant that prompts the user to make better financial decisions
#Create a UI that allows this app to be functional for users
#Create graphing or budgeting plan that allows user to see how they're following their budget


def get_float_input(prompt): #validating users input entered
    while True:
        try:
            return float(input(prompt))
        except ValueError:
            print('Invalid input.Please enter an amount')
def category_input(): # Creating categories and validating those categories
    categories = ['Food', 'Job', 'Transportation/Gas', 'Entertainment', 'Bills/Utilities', 'Subscriptions', 'Savings/Investments', 'Other']
    category = input(f'Enter category {categories} (or create your own): ')
    if category not in categories:
        print(f'Adding custom category: {category}')
        categories.append(category)
    return category

def add_income(balance):  #getting users income
    date = input('Enter the date: ')
    amount = get_float_input('Enter your amount: ')
    category = category_input()

    return date, balance + amount, category

def add_expense(balance): #getting users expenses
    date = input('Enter the date: ')
    amount = get_float_input('Enter your amount: ')
    category = category_input()
    return date, balance - amount, category

def main(): #main program
    balance = 0.0
    statement = []
    while True:
        print(f'\nCurrent balance: ${balance:.2f}')
        choice = int(input('''
        1. Add income
        2. Add expense
        3. Check Statement
        4. Quit
        <
        '''))

        if choice == 1:
            date, new_balance, category = add_income(balance)
            statement.append((date, 'Income', new_balance - balance, category))
            balance = new_balance
        elif choice == 2:
             date, new_balance, category = add_expense(balance)
             statement.append((date ,'Expense', abs(new_balance - balance), category))
             balance = new_balance
        elif choice == 3:
            print('\nStatement')
            for entry in statement:
                print(f'{entry[0]} {entry[1]} ({entry[3]}): ${entry[2]:.2f}')
        elif choice == 4:
            print("Thank you for using Jamir's budgeting app")
            break
        else:
            print('Input not available. Please try again')

if __name__ == '__main__':
    main()