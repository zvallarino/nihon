class AddCategoryHorzToHiragana < ActiveRecord::Migration[7.0]
  def change
    add_column :hiraganas, :categoryHorz, :string
  end
end
