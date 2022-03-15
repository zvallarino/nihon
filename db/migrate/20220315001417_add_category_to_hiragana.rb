class AddCategoryToHiragana < ActiveRecord::Migration[7.0]
  def change
    add_column :hiraganas, :category, :string
  end
end
